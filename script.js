const toggleButton = document.getElementById('toggleButton');
const details = document.getElementById('details');

toggleButton.addEventListener('click', () => {
        const isHidden = details.classList.contains('hidden');

        if (isHidden) {
            details.classList.remove('hidden');
            details.classList.add('visible');
            toggleButton.textContent = '詳細を隠す';
        } else {
            details.classList.remove('visible');
            details.classList.add('hidden');
            toggleButton.textContent = '詳細を見る';
        }
}); 
