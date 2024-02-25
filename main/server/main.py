from flask import Flask, request, jsonify
import sqlite3
import time

app = Flask(__name__)

@app.route('/login', methods=['POST'])
def login():
    if request.method == 'GET':
        return jsonify({'message': 'GET request received'})
    elif request.method == 'POST':
        data = request.json
        username = data.get('username')
        password = data.get('password')
        
        connection = sqlite3.connect('users.db')
        cursor = connection.cursor()
        cursor.execute("SELECT username, password, name FROM users WHERE username = (?) AND password = (?)", (username, password))
        user = cursor.fetchone()
        connection.commit()
        connection.close()
        

        return jsonify({'username': user[0]})
    
@app.route('/<username>')
def mainpage(username):
    connection = sqlite3.connect('users.db')
    cursor = connection.cursor()

    # Fetch user data
    cursor.execute("SELECT name FROM users WHERE username = (?)", (username, ))
    user = cursor.fetchone()

    # Fetch progress data
    cursor.execute("SELECT * FROM progress WHERE uname = (?)", (username,))
    progress_columns = [desc[0] for desc in cursor.description]
    progress_data = cursor.fetchone()

    connection.close()

    # Check if progress_data is None
    if progress_data is None:
        return jsonify({
            'username': user[0], 'progress': None})

    # Create a dictionary with column names as keys and progress data as values
    progress = dict(zip(progress_columns, progress_data))
    total = 0
    for value in progress.values():
        if value == 1:
            total += 1
    total = round((total - 1)/15 * 100)
    print(total)

        


    return jsonify({
    'username': user[0],
    'progress': progress,
    'pct' : total,
    **{f'day{i}': progress[f'day{i}'] for i in range(1, 15)},
    
    }
    )

@app.route("/Day1")
def Day1():
    return "here"

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)  # Change port to 5000 or any other port you prefer