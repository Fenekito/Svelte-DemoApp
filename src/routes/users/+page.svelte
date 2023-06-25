<script lang="ts">
    import type { PageData } from './$types.js';
    export let data: PageData

    $: ({ users } = data);
</script>

<section>
    <body>
        <table>
            <tr>
                <th>Email</th>
                <th>Name</th>
            </tr>
                {#each users as user}
                    <tr>
                        <td>{user.email}</td>
                        <td>{user.name}</td>
                    </tr>
                {/each}
        </table>
    </body>
</section>