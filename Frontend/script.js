const API_BASE = "http://localhost:8080/pokemon";

document.addEventListener('DOMContentLoaded', () => {
    applySavedTheme();
    displaySearchHistory();
    const input = document.getElementById('pokemonInput');
    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') searchPokemon();
        });
    }
});

async function searchPokemon(manualName = null) {
    const input = document.getElementById('pokemonInput');
    const name = (manualName || input.value).trim().toLowerCase();
    const card = document.getElementById('pokemonCard');
    const list = document.getElementById('pokemonList');

    if (!name) return alert("Please enter a name");
    list.innerHTML = ""; 
    card.style.display = "block";
    card.innerHTML = `<p class="loader">Catching ${name}...</p>`;

    try {
        const response = await fetch(`${API_BASE}/search?name=${name}`);
        if (!response.ok) throw new Error("Pokemon not found!");
        
        const data = await response.json();
        card.innerHTML = `
            <h3>${data.name.toUpperCase()} ${data.id ? `(#${data.id})` : ''}</h3>
            <img src="${data.sprites.front_default}" alt="${data.name}" style="filter: drop-shadow(2px 4px 6px black);">
            <p><strong>Height:</strong> ${data.height} | <strong>Weight:</strong> ${data.weight}</p>
            <div><strong>Abilities:</strong> ${data.abilities.map(a => a.ability.name).join(", ")}</div>
            <div style="margin-top:10px;">
                ${data.types.map(t => `<span class="type-badge">${t.type.name}</span>`).join("")}
            </div>
        `;

        saveToHistory(data.name);
        input.value = ""; 
    } catch (err) {
        card.style.display = "none";
        alert(err.message);
    }
}

async function fetchAllPokemon() {
    const list = document.getElementById('pokemonList');
    const card = document.getElementById('pokemonCard');
    const input = document.getElementById('pokemonInput');
    
    list.innerHTML = "<li class='loader'>Opening Pokedex...</li>";
    card.style.display = "none";

    try {
        const response = await fetch(`${API_BASE}/getAll`);
        const wrapperList = await response.json();
        
        // Check if wrapperList[0] exists because of your Collections.singletonList
        if (!wrapperList || !wrapperList[0] || !wrapperList[0].results) {
            throw new Error("No data found");
        }
        
        const pokemonResults = wrapperList[0].results;
        list.innerHTML = ""; 

        pokemonResults.forEach(p => {
            const id = p.url.split('/').filter(Boolean).pop();
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

            const li = document.createElement('li');
            li.className = "mini-card";
            li.innerHTML = `
                <img src="${imageUrl}" alt="${p.name}" loading="lazy">
                <h4>${p.name}</h4>
            `;
            li.onclick = () => {
                input.value = p.name;
                searchPokemon(p.name);
                window.scrollTo({top: 0, behavior: 'smooth'});
            };
            list.appendChild(li);
        });
    } catch (err) {
        list.innerHTML = "<li style='color:red'>Backend error: Please ensure your Microservice is running on port 8080.</li>";
    }
}

function saveToHistory(name) {
    let history = JSON.parse(localStorage.getItem('pokeHistory')) || [];
    history = history.filter(item => item !== name);
    history.unshift(name);
    
    if (history.length > 6) history.pop();
    localStorage.setItem('pokeHistory', JSON.stringify(history));
    displaySearchHistory();
}

function displaySearchHistory() {
    const historyDiv = document.getElementById('historySection');
    const history = JSON.parse(localStorage.getItem('pokeHistory')) || [];
    
    if (history.length === 0) {
        historyDiv.innerHTML = "";
        return;
    }

    historyDiv.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <h4>Recent:</h4>
            <button onclick="clearHistory()" style="background:none; color:grey; font-size:0.7rem; text-decoration:underline;">Clear</button>
        </div>
    `;
    
    const btnContainer = document.createElement('div');
    history.forEach(name => {
        const btn = document.createElement('button');
        btn.className = "hist-btn";
        btn.textContent = name;
        btn.onclick = () => searchPokemon(name);
        btnContainer.appendChild(btn);
    });
    historyDiv.appendChild(btnContainer);
}

function clearHistory() {
    if(confirm("Clear search history?")) {
        localStorage.removeItem('pokeHistory');
        displaySearchHistory();
    }
}

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('pokeTheme', isDark ? 'dark' : 'light');
}

function applySavedTheme() {
    if (localStorage.getItem('pokeTheme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
}