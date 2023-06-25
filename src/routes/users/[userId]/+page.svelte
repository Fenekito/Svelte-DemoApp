<script lang="ts">
    import type { PageData } from './$types.js';
    export let data: PageData

    $: ({ user } = data);
</script>

<section>
	<h1>Edição de Usuario</h1>
    <body class="grid">
        <form action="?/updateUser" method="POST">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" value="{user.email}" required/>
            <label for="name">Nome</label>
            <input type="text" id="name" name="name" value="{user.name}" required/>
            <label for="password">Senha</label>
            <input type="password" id="password" name="password" required/>
            <button type="submit">Atualizar</button>
        </form>
    </body>
    <a href="/users">
        <button>Ver Usuários</button>
    </a>
</section>