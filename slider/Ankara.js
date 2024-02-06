document.addEventListener('DOMContentLoaded', function ()
{
    const gsap = window.gsap; // GSAP

    const sTrack = document.querySelector('.s-track');
    let currentIndex = 0;

    function updateSlider()
    {
        const newPosition = -currentIndex * 100 + '%';
        sTrack.style.transform = 'translateX(' + newPosition + ')';
    }

    function nextSlide()
    {
        currentIndex = (currentIndex + 1) % document.querySelectorAll('.s-item').length;
        updateSlider();
    }

    function prevSlide()
    {
        currentIndex = (currentIndex - 1 + document.querySelectorAll('.s-item').length) % document.querySelectorAll('.s-item').length;
        updateSlider();
    }

    setInterval(nextSlide, 2000);

    const observer = new IntersectionObserver((entries) =>
    {
        entries.forEach((entry) =>
        {
            if (entry.isIntersecting)
            {
                // Bölüm görüntülendiğinde animasyonu 
                gsap.from(entry.target, {
                    duration: 2,
                    opacity: 0,
                    x: 1000,
                    stagger: 0.2,
                    ease: "power2.out",
                });

                //animasyon sadece bir kez çalışsın
                observer.unobserve(entry.target);
            }
        });
    });

    // Gözlemlemek istediğiniz bölümleri seç ve observer'a ekle
    const sections = document.querySelectorAll(".card-container");

    sections.forEach((section) =>
    {
        observer.observe(section);

    });
    //////////////////
    let count = 0;

    function updateCount()
    {
        document.getElementById('count').textContent = count;
    }

    window.increment = function ()
    {
        count++;
        updateCount();
    }

    window.decrement = function ()
    {
        count--;
        updateCount();
    };





    // Select kutusundaki değişiklikleri dinle
    selectBox.addEventListener('change', handleCombinedEvent);

    function handleCombinedEvent()
    {
        // Bu fonksiyon, count ve selectBox değerleri değiştiğinde çalışacak işlevselliği içerir
        const selectedCity = selectBox.value;
        const selectedRoute = parseInt(selectBox.options[selectBox.selectedIndex].getAttribute('data-route'), 10);
        const resultElement = document.getElementById('sum');
        console.log("sum:", count * selectedRoute);

        const sum = count * selectedRoute;
        resultElement.textContent = "Toplam Ücret: " + sum
    }

});