document.addEventListener('DOMContentLoaded', () => {
    // Массив всех возможных значений
    let originalValues = [
        { name: "Соединенность с природой", description: "Гармония с природой и ее элементами." },
        { name: "Окружающая среда", description: "Сохранение природных экосистем." },
        { name: "Автономность", description: "Свобода и независимость в мыслях и действиях." },
        { name: "Религия", description: "Соблюдение религиозных убеждений и практик." },
        { name: "Семья", description: "Ценить и отдавать приоритет семейным отношениям." },
        { name: "Инновации", description: "Стремление к новым идеям и творческим подходам." },
        { name: "Прощение", description: "Отпускать обиды и двигаться впёред с пониманием." },
        { name: "Порядок", description: "Четкость, предсказуемость и структура." },
        { name: "Критическое мышление", description: "Глубокий анализ и оценка сложностей." },
        { name: "Служение", description: "Посвящение делу, выходящему за рамки личной выгоды." },
        { name: "Сострадание", description: "Эмпатия и доброта к другим." },
        { name: "Образование", description: "Приобретение знаний и обучение." },
        { name: "Честность", description: "Соблюдение моральных и этических принципов." },
        { name: "Свобода", description: "Возможность говорить, действовать и мыслить свободно." },
        { name: "Мужество", description: "Противостояние страхам и защита своих убеждений." },
        { name: "Справедливость", description: "Равенство, ответственность и честность." },
        { name: "Здоровье", description: "Приоритет физического, психического и эмоционального благополучия." },
        { name: "Слава", description: "Быть узнаваемым и известным." },
        { name: "Уважение", description: "Внимание и уважение к другим и себе." },
        { name: "Верность", description: "Верность обязательствам и обязанностям." },
        { name: "Творчество", description: "Самовыражение через оригинальные идеи." },
        { name: "Радость", description: "Стремление к счастью и радости." },
        { name: "Лидерство", description: "Вдохновение и управление для общей цели." },
        { name: "Скромность", description: "Скромное восприятие себя." },
        { name: "Возможности", description: "Широкий выбор для принятия решений." },
        { name: "Альтруизм", description: "Действия на благо других." },
        { name: "Приключения", description: "Поиск новых захватывающих переживаний." },
        { name: "Мудрость", description: "Применение знаний и опыта." },
        { name: "Баланс", description: "Гармония между различными аспектами жизни." },
        { name: "Стабильность", description: "Постоянство и надежность." },
        { name: "Благодарность", description: "Признательность за добро в жизни." },
        { name: "Честь", description: "Соблюдение принципов честности." },
        { name: "Щедрость", description: "Способность отдавать без ожидания." },
        { name: "Настойчивость", description: "Упорство вопреки трудностям." },
        { name: "Интерес", description: "Желание учиться и познавать." },
        { name: "Ответственность", description: "Ответственность за свои действия." },
        { name: "Власть", description: "Влияние и контроль." },
        { name: "Традиции", description: "Сохранение культурных практик." },
        { name: "Инклюзивность", description: "Участие и принятие каждого." },
        { name: "Устойчивое развитие", description: "Удовлетворение потребностей без ущерба будущему." },
        { name: "Аутентичность", description: "Жить в гармонии со своими истинными чувствами." },
        { name: "Устойчивость", description: "Быстрое восстановление после трудностей." },
        { name: "Мир", description: "Гармония и отсутствие конфликтов." },
        { name: "Любовь", description: "Глубокая привязанность и забота." },
        { name: "Оптимизм", description: "Позитивный взгляд на будущее." },
        { name: "Осознанность", description: "Погружённость в настоящий момент." },
        { name: "Эффективность", description: "Максимальная продуктивность с минимальными усилиями." },
        { name: "Безопасность", description: "Чувство защищенности." },
        { name: "Богатство", description: "Материальные и финансовые блага." },
        { name: "Эмпатия", description: "Понимание и разделение чувств другого." },
        { name: "Юмор", description: "Ценность забавного и смешного." },
        { name: "Значимая работа", description: "Работа с положительным влиянием." },
        { name: "Терпение", description: "Спокойное принятие трудностей." },
        { name: "Дисциплина", description: "Самоконтроль и ясность поведения." },
        { name: "Мастерство", description: "Достижение высокого уровня умения." },
        { name: "Равенство", description: "Равные права и возможности для всех." },
        { name: "Саморефлексия", description: "Осмысление собственных мыслей." },
        { name: "Кооперация", description: "Совместная работа для достижения целей." },
        { name: "Адаптивность", description: "Быстрое приспособление к изменениям." },
        { name: "Прозрачность", description: "Открытость и честность." },
        { name: "Усердие", description: "Настойчивость в достижении целей." },
        { name: "Духовность", description: "Поиск глубокого смысла, превосходящего личное." },
        { name: "Поддержка", description: "Помощь тем, кто в ней нуждается." },
        { name: "Интуиция", description: "Понимание без анализа." }
    ];
    
    // Начальное копирование массива с добавлением поля importance
    let values = originalValues.map(value => ({ ...value, importance: 0 }));
    
    const stages = [16, 15, 10, 5];
    let currentStage = 0;
    
    const cardContainer = document.getElementById('card-container');
    const keepPile = document.getElementById('keep');
    const discardPile = document.getElementById('discard');
    const instructionsElement = document.getElementById('instructions');
    const nextStageButton = document.getElementById('nextStage');
    const discardArrow = document.getElementById('discardArrow');
    const keepArrow = document.getElementById('keepArrow');
    
    let initiallyDiscarded = []; // для отслеживания первоначально отброшенных карточек
    
    function assignImportanceToValues() {
        // На начальном этапе запоминаем отброшенные карточки
        if (currentStage === 0) {
            const discardCards = discardPile.querySelectorAll('.card');
            discardCards.forEach(card => {
                const cardValue = card.querySelector('strong').textContent;
                initiallyDiscarded.push(cardValue);
            });
        }
        // На финальном этапе помечаем оставшиеся карточки
        if (currentStage === stages.length - 1) {
            const keepCards = keepPile.querySelectorAll('.card');
            keepCards.forEach(card => {
                const cardValue = card.querySelector('strong').textContent;
                const valueObject = values.find(value => value.name === cardValue);
                if(valueObject) { valueObject.importance = 'топ 5'; }
            });
    
            const discardCards = discardPile.querySelectorAll('.card');
            discardCards.forEach(card => {
                const cardValue = card.querySelector('strong').textContent;
                const valueObject = values.find(value => value.name === cardValue);
                if(valueObject) { valueObject.importance = 'важные'; }
            });
        }
    }
    
    function displayInstructions() {
        const instructions = [
            "Выберите ценности, соответствующие вам.",
            "Оставьте только 15 карточек.",
            "Оставьте только 10 карточек.",
            "Оставьте только 5 карточек."
        ];
        instructionsElement.textContent = instructions[currentStage];
    }
    
    // Обновление счётчиков карточек в зонах
    function updatePileCounts() {
        const keepCount = keepPile.querySelectorAll('.card').length;
        const discardCount = discardPile.querySelectorAll('.card').length;
        keepPile.querySelector('.count').textContent = keepCount;
        discardPile.querySelector('.count').textContent = discardCount;
    }
    
    function clearDiscardPile() {
        discardPile.innerHTML = '<h2>Отбросить (<span class="count">0</span>)</h2>';
    }
    
    // Drag&Drop для десктопа
    function setupDraggableCard(card) {
        card.addEventListener('dragstart', e => {
            e.dataTransfer.setData('text/plain', card.getAttribute('data-index'));
        });
    }
    
    // Обработка свайпов для мобильных устройств
    function setupSwipe(card) {
        let startX = 0;
        const swipeThreshold = 50; // минимальное расстояние для определения свайпа
        card.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
    
        card.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const diffX = endX - startX;
    
            if (diffX > swipeThreshold) {
                keepPile.appendChild(card);
            } else if (diffX < -swipeThreshold) {
                discardPile.appendChild(card);
            }
    
            updatePileCounts();
            displayTopCardOnly();
        });
    }
    
    function createCardElement(value, index) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-index', index);
        card.innerHTML = `<strong>${value.name}</strong><p>${value.description}</p>`;
    
        if ('ontouchstart' in window) {
            setupSwipe(card);
        } else {
            card.setAttribute('draggable', true);
            setupDraggableCard(card);
        }
    
        return card;
    }
    
    function initializeCards() {
        cardContainer.innerHTML = '';
        values.forEach((value, index) => {
            const card = createCardElement(value, index);
            cardContainer.appendChild(card);
        });
        if (currentStage === 0) {
            displayTopCardOnly();
        }
        updatePileCounts();
    }
    
    // Показываем только верхнюю карточку
    function displayTopCardOnly() {
        const cards = cardContainer.children;
        Array.from(cards).forEach((card, index) => {
            card.style.display = (index === 0) ? 'block' : 'none';
        });
    }
    
    // Настройка зон для drag&drop
    function setupDropZones() {
        [keepPile, discardPile].forEach(zone => {
            zone.addEventListener('dragover', e => {
                e.preventDefault();
                zone.classList.add('over');
            });
    
            zone.addEventListener('dragleave', () => {
                zone.classList.remove('over');
            });
    
            zone.addEventListener('drop', e => {
                e.preventDefault();
                zone.classList.remove('over');
                const index = e.dataTransfer.getData('text/plain');
                const card = document.querySelector(`.card[data-index="${index}"]`);
                zone.appendChild(card);
                updatePileCounts();
                if (currentStage === 0) {
                    displayTopCardOnly();
                }
            });
        });
    }
    
    // Обработчики стрелок: имитируют свайп
    discardArrow.addEventListener('click', () => {
        const card = cardContainer.querySelector('.card');
        if(card) {
            discardPile.appendChild(card);
            updatePileCounts();
            displayTopCardOnly();
        }
    });
    
    keepArrow.addEventListener('click', () => {
        const card = cardContainer.querySelector('.card');
        if(card) {
            keepPile.appendChild(card);
            updatePileCounts();
            displayTopCardOnly();
        }
    });
    
    function checkStageCompletion() {
        const keepCount = keepPile.querySelectorAll('.card').length;
        if ((currentStage === 0 && keepCount < stages[currentStage]) || 
            (currentStage > 0 && keepCount !== stages[currentStage])) {
            alert(`Выберите минимум ${stages[currentStage]} карточек, чтобы продолжить.`);
            return false;
        }
        return true;
    }
    
    // Генерация PDF с итоговыми значениями и вдохновляющим посланием
    function generatePDF(finalValues) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Для поддержки кириллицы добавляем шрифт, поддерживающий русские символы.
        // Замените "BASE64_FONT_DATA" на реальные данные в формате base64 для выбранного TTF-шрифта (например, DejaVuSans.ttf)
        doc.addFileToVFS("DejaVuSans.ttf", "BASE64_FONT_DATA");
        doc.addFont("DejaVuSans.ttf", "DejaVuSans", "normal");
        doc.setFont("DejaVuSans");

        let y = 20;
        doc.setFontSize(18);
        doc.text("Ваши Ключевые Ценности", 10, y);
        y += 10;
        doc.setFontSize(12);
        finalValues.forEach((value, index) => {
            const line = `${index + 1}. ${value.name} – ${value.description} (${value.importance})`;
            const splitText = doc.splitTextToSize(line, 180);
            doc.text(splitText, 10, y);
            y += splitText.length * 7;
            if (y > 270 && index < finalValues.length - 1) {
                doc.addPage();
                y = 20;
            }
        });
        y += 10;
        doc.setFontSize(14);
        doc.text(
          "Вдохновляющие слова:\nВаши ценности – отражение вашей уникальности и силы. Продолжайте идти вперёд!",
          10,
          y,
          { maxWidth: 180 }
        );
        doc.save("core_values.pdf");
    }
    
    function advanceStage() {
        if (!checkStageCompletion()) return;
        assignImportanceToValues();
        if (currentStage < stages.length - 1) {
            clearDiscardPile();
            currentStage++;
            displayInstructions();
            assignImportanceToValues();
    
            if (currentStage >= 1) {
                // Для этапов 2 и 3: пересоздаем карточки из сохранённых значений
                const keptValues = [...keepPile.querySelectorAll('.card')].map(card => ({
                    name: card.querySelector('strong').textContent,
                    description: card.querySelector('p').textContent
                }));
                keepPile.innerHTML = '<h2>Сохранить (<span class="count">0</span>)</h2>';
                values = keptValues.map(val => ({ ...val, importance: 0 }));
                cardContainer.innerHTML = '';
                values.forEach((value, index) => {
                    const card = createCardElement(value, index);
                    keepPile.appendChild(card);
                });
            }
    
            if (currentStage > 0) {
                cardContainer.style.display = 'none';
            }
    
            updatePileCounts();
        } else {
            // Финальный этап – сортировка и генерация PDF
            const finalValues = [...keepPile.querySelectorAll('.card')].map(card => ({
                name: card.querySelector('strong').textContent,
                description: card.querySelector('p').textContent,
                importance: values.find(v => v.name === card.querySelector('strong').textContent).importance
            }));
    
            // Обновляем визуальное представление итоговых карточек
            keepPile.innerHTML = '<h2>Сохранить</h2>';
            finalValues.forEach(value => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `<strong>${value.name}</strong><p>${value.description}</p>`;
                keepPile.appendChild(card);
            });
    
            // Скрываем ненужные элементы интерфейса
            cardContainer.style.display = 'none';
            document.querySelector('.pile-container').style.display = 'none';
            nextStageButton.style.display = 'none';
            discardArrow.style.display = 'none';
            keepArrow.style.display = 'none';
    
            // Генерируем PDF с итоговыми данными
            generatePDF(finalValues);
    
            alert('Ваш выбор ценностей сохранен. PDF с результатами загружен!');
        }
    }
    
    displayInstructions();
    initializeCards();
    setupDropZones();
    
    nextStageButton.addEventListener('click', advanceStage);
});
