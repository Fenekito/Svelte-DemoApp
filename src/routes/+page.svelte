<script>
    export let form;
</script>

<section>
    <body class="grid">
        <form action="?/createUser" method="POST">
            {#if form?.message}
                <p>{form.message}</p>
            {/if}
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required/>
            <label for="name">Nome</label>
            <input type="text" id="name" name="name" required/>
            <button type="submit">Cadastrar</button>
        </form>
    </body>
</section>