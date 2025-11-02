const mainBtn = document.getElementById('btn-main');

mainBtn.addEventListener('click', () => {
    document.body.innerHTML = `    <h1>Heading</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis laudantium eum quos mollitia aliquid atque et, quisquam error eaque.</p>
    <h2>Heading2</h2>
    <button type="reset" id="btn-main" class="btn">Login</button>`
})