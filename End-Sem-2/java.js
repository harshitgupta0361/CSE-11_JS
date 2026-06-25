function ConvertToFahrenheit() {
            const celsius = document.getElementById('celsius').value;
            const fahrenheit = (celsius * 9/5) + 32;
            document.getElementById('result').innerText = `${celsius} degrees C is ${fahrenheit.toFixed(2)} degrees F`;
        }

        function ConvertToCelsius() {
            const fahrenheit = document.getElementById('fahrenheit').value;
            const celsius = (fahrenheit - 32) * 5/9;
            document.getElementById('result2').innerText = `${fahrenheit} degrees F is ${celsius.toFixed(2)} degrees C`;
        }