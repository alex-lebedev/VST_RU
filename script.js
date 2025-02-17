document.addEventListener('DOMContentLoaded', () => {
    // Массив всех возможных значений
    let originalValues = [
        { name: "Соединенность с природой", description: "Гармония с природой и ее элементами." },
        { name: "Окружающая среда", description: "Сохранение природных экосистем." },
        { name: "Автономность", description: "Свобода и независимость в мыслях и действиях." },
        { name: "Религия", description: "Соблюдение религиозных убеждений и практик." },
        { name: "Семья", description: "Ценить и отдавать приоритет семейным отношениям." },
        { name: "Инновации", description: "Стремление к новым идеям и творческим подходам в решении задач." },
        { name: "Прощение", description: "Отпускать обиды и двигаться впёред с пониманием." },
        { name: "Порядок", description: "Выбор в пользу четкости, предсказуемости и структуры." },
        { name: "Критическое мышление", description: "Глубокий анализ и критическая оценка сложностей." },
        { name: "Служение", description: "Посвящение себя делу, выходящему за рамки личной выгоды." },
        { name: "Сострадание", description: "Проявление эмпатии и доброты к другим." },
        { name: "Образование", description: "Ценность приобретения знаний и обучения." },
        { name: "Честность", description: "Соблюдение моральных и этических принципов." },
        { name: "Свобода", description: "Возможность говорить, действовать и мыслить без препятствий." },
        { name: "Мужество", description: "Противостоять страхам и отстаивать то, что правильно." },
        { name: "Справедливость", description: "Содействие справедливости, равенству и ответственности." },
        { name: "Здоровье", description: "Приоритет физического, психического и эмоционального благополучия." },
        { name: "Слава", description: "Быть широко известным и узнаваемым." },
        { name: "Уважение", description: "Проявление внимания и уважения к другим и себе." },
        { name: "Верность", description: "Быть верным обязательствам и обязанностям." },
        { name: "Творчество", description: "Самовыражение через оригинальные идеи и инновации." },
        { name: "Радость", description: "Стремление к счастью и радости в жизни." },
        { name: "Лидерство", description: "Вдохновение и управление другими во имя общей цели." },
        { name: "Скромность", description: "Скромное восприятие себя и своей важности." },
        { name: "Возможности", description: "Широкие возможности принятия решений для себя и других." },
        { name: "Альтруизм", description: "Бескорыстное действие на благо других." },
        { name: "Приключения", description: "Поиск новых и захватывающих переживаний." },
        { name: "Мудрость", description: "Применение знаний, опыта и проницательности в принятии решений." },
        { name: "Баланс", description: "Поддержание гармонии между различными аспектами жизни." },
        { name: "Стабильность", description: "Поддержание постоянства и надежности в жизни." },
        { name: "Благодарность", description: "Быть благодарным за добро в жизни и выражать признательность." },
        { name: "Честь", description: "Соблюдение принципов честности и уважения." },
        { name: "Щедрость", description: "Способность отдавать без ожидания чего-либо взамен." },
        { name: "Настойчивость", description: "Непоколебимое продолжение действий вопреки трудностям." },
        { name: "Интерес", description: "Иметь сильное желание учиться и понимать." },
        { name: "Ответственность", description: "Быть ответственным за свои действия и их последствия." },
        { name: "Власть", description: "Реализация контроля или влияния над другими." },
        { name: "Традиции", description: "Ценность и сохранение культурных практик и норм." },
        { name: "Инклюзивность", description: "Обеспечение возможности участия и принятия каждого." },
        { name: "Устойчивое развитие", description: "Удовлетворение потребностей без ущерба будущим поколениям." },
        { name: "Аутентичность", description: "Жить искренне, в гармонии со своими истинными чувствами." },
        { name: "Устойчивость", description: "Быстрое восстановление после трудностей; стойкость." },
        { name: "Мир", description: "Стремление к гармонии и свободе от конфликтов." },
        { name: "Любовь", description: "Глубокая привязанность и забота о ком-то или о чем-то." },
        { name: "Оптимизм", description: "Позитивный взгляд на будущее." },
        { name: "Осознанность", description: "Быть в настоящем, полностью погруженным в момент." },
        { name: "Эффективность", description: "Достижение максимальной продуктивности с минимальными усилиями." },
        { name: "Безопасность", description: "Чувство защищенности в своей среде или отношениях." },
        { name: "Богатство", description: "Накопление материальных и финансовых благ." },
        { name: "Эмпатия", description: "Понимание и разделение чувств другого." },
        { name: "Юмор", description: "Ценность того, что смешно и забавно." },
        { name: "Значимая работа", description: "Занятие, имеющее положительное влияние." },
        { name: "Терпение", description: "Спокойное принятие трудностей без раздражения." },
        { name: "Дисциплина", description: "Развитие самоконтроля и ясности поведения." },
        { name: "Мастерство", description: "Достижение высокого уровня умения в деле." },
        { name: "Равенство", description: "Вера в равные права и возможности для всех." },
        { name: "Саморефлексия", description: "Осмысление собственных мыслей и чувств." },
        { name: "Кооперация", description: "Совместная работа с другими для достижения цели." },
        { name: "Адаптивность", description: "Способность быстро приспосабливаться к изменениям." },
        { name: "Прозрачность", description: "Открытость и честность в общении." },
        { name: "Усердие", description: "Настойчивая работа для достижения целей." },
        { name: "Духовность", description: "Поиск глубокого смысла, превосходящего личное." },
        { name: "Поддержка", description: "Помощь тем, кто в ней нуждается." },
        { name: "Интуиция", description: "Понимание без сознательного анализа." }
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
            "Выберите все ценности, которые соответствуют вам. Свайпните карточку вправо (Сохранить) или влево (Отбросить).",
            "Оставьте только 15 карточек.",
            "Оставьте только 10 карточек.",
            "Оставьте только 5 карточек."
        ];
        instructionsElement.textContent = instructions[currentStage];
    }
    
    function updatePileCounts() {
        const keepCount = keepPile.querySelectorAll('.card').length;
        const discardCount = discardPile.querySelectorAll('.card').length;
        keepPile.querySelector('h2').textContent = `Сохранить (${keepCount})`;
        discardPile.querySelector('h2').textContent = `Отбросить (${discardCount})`;
    }
    
    function clearDiscardPile() {
        discardPile.innerHTML = '<h2>Отбросить (0)</h2>';
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
                // Свайп вправо – сохраняем карточку
                keepPile.appendChild(card);
            } else if (diffX < -swipeThreshold) {
                // Свайп влево – отбрасываем карточку
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
          "Вдохновляющие слова:\nВаши ценности – отражение вашей уникальности и силы. Продолжайте идти вперед и достигайте новых высот!",
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
                keepPile.innerHTML = '<h2>Сохранить (0)</h2>';
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
                // Берем значение importance из массива values по имени
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
