# 222010324051 - Question 1

Output Screenshot : ![image](https://github.com/Ruthvik3113/222010324051/assets/82648438/6cc28aa2-0195-473e-9fcf-c7868d1f42f5)
# Number Management Microservice

The Number Management Microservice is a simple HTTP microservice developed in Node.js and Express that aggregates and sorts unique numbers from multiple URLs. It exposes a REST API endpoint that accepts a list of URLs as query parameters and returns a merged and sorted list of unique integers.

## Features

- Aggregates and sorts unique numbers from multiple URLs.
- Handles invalid URLs and timeouts gracefully.
- Designed for quick responses, respecting a maximum timeout.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ruthvik3113/222010324051

### Usage
Access the microservice by making a GET request to the following endpoint:
    ```bash
    http://localhost:8008/numbers?url=<URL1>&url=<URL2>&...

