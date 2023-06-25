<script lang="ts">
    import type { PageData } from './$types.js';
    export let data: PageData

    $: ({ users } = data);
</script>

<style>
    .warning {
        --primary: red;
        --primary-hover: rgb(181, 41, 41);
    }
</style>

<section class="grid">
    <body>
        <h2>Editar/Deletar Usuários</h2>
        {#each users as user}
            <user>
                <h3>Email: {user.email}</h3>
                <h3>Name: {user.name}</h3>
                <a href="/users/{user.id}">
                    <button>Editar</button>
                </a>
                <form action="?/deleteUser&id={user.id}" method="POST">
                    <button class="warning">Deletar</button>
                </form>
            </user>
        {/each}
    </body>
</section>