<script>
  import {scale} from 'svelte/transition'
</script>

<div in:scale>
  <slot></slot>
</div>