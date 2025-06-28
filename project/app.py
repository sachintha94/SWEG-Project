from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# ✅ Define GPV table once
grade_to_gpv = {
    "A+": 4.00, "A": 4.00, "A-": 3.70,
    "B+": 3.30, "B": 3.00, "B-": 2.70,
    "C+": 2.30, "C": 2.00, "C-": 1.70,
    "D": 1.00, "E": 0.00
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    try:
        data = request.get_json()  # Expects JSON with courseCode: grade
        total_points = 0
        total_credits = 0

        for course_code, grade in data.items():
            gpv = grade_to_gpv.get(grade)
            if gpv is not None:
                credit = int(course_code[4])  # 5th character = credit
                total_credits += credit
                total_points += gpv * credit

        gpa = round(total_points / total_credits, 2) if total_credits > 0 else 0.0

        # 🎓 Degree Classification
        if gpa >= 3.70:
            degree_class = "🎓 First Class"
        elif gpa >= 3.30:
            degree_class = "🎓 Second Class (Upper Division)"
        elif gpa >= 3.00:
            degree_class = "🎓 Second Class (Lower Division)"
        else:
            degree_class = "🎓 General Degree"

        return jsonify({'gpa': gpa, 'degree_class': degree_class})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
