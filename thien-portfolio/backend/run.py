import os
import sys
import subprocess

# Auto-detect and switch to venv if user runs using global Python without activation
venv_python = os.path.join(os.path.dirname(__file__), "venv", "Scripts", "python.exe")
if os.path.exists(venv_python) and os.path.normpath(sys.executable).lower() != os.path.normpath(venv_python).lower():
    try:
        import uvicorn
    except ImportError:
        print(f"[INFO] Switching to virtual environment: {venv_python}")
        exit_code = subprocess.call([venv_python] + sys.argv)
        sys.exit(exit_code)

import uvicorn
from app.core.config import settings

if __name__ == "__main__":
    uvicorn.run(
        "app.main:app",
        host=settings.APP_HOST,
        port=settings.APP_PORT,
        reload=True
    )

