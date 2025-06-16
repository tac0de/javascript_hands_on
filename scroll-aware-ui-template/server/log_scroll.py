from flask import Flask, request
from datetime import datetime
import json

app = Flask(__name__)

@app.route("/log", methods=["POST"])
def log_scroll():
    data = request.json
    data["timestamp"] = datetime.now().isoformat()

    with open("scroll_log.json", "a") as f:
        f.write(json.dumps(data) + "\n")

    return {"status": "logged"}, 200

if __name__ == "__main__":
    app.run(port=5001)
