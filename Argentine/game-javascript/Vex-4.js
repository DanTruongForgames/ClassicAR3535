        // Function to open a new tab with the iframe
        function openEmbed() {
            // Create a new window/tab
            var newWindow = window.open('about:blank');

            // Create an iframe element
            var iframe = document.createElement('iframe');

            // Set the source URL for the iframe
            iframe.src = 'https://dantruongforgames.github.io/Game222222/vex4/';

            // Set iframe attributes to cover the entire page
            iframe.style.position = 'absolute';
            iframe.style.top = '0';
            iframe.style.left = '0';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'none';

            // Append the iframe to the new window's document
            newWindow.document.body.appendChild(iframe);

            // Change the tab title
            newWindow.document.title = 'Vex 4 | Argentine classic';
        }

        // Add a click event listener to the button
        document.getElementById('vex-4').addEventListener('click', openEmbed);