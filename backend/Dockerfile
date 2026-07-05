FROM python:3.11-slim

# Copy the uv binary from the official Astral image
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

WORKDIR /app

# Enable bytecode compilation for faster container starts
ENV UV_COMPILE_BYTECODE=1

# Copy only dependency files first to leverage Docker layer caching
COPY pyproject.toml uv.lock ./

# Install dependencies into the container's system Python
RUN uv pip install --system -r pyproject.toml

# Copy the rest of the application code
COPY . .

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]