<script>
	import { onMount } from 'svelte';
	import { deposit } from '../../lib/pool';
	import { balance } from '../../lib/wallet';
	import { toasts } from '../../lib/toasts';
	import Modal from './Modal.svelte';
	import Button from '../Button.svelte';
		}
	}

	function setMaxAmount() {
		amount = $balance;
	}

</script>

<style>

	<div class='group'>
		<label>Amount</label>
		<div class='balance-info'>
			<span>Balance: </span>
			<a href='#' on:click|preventDefault={setMaxAmount}>
				{parseFloat($balance).toFixed(4)}
			</a>
		</div>
		<input type='number' bind:value={amount} min=0 max={$balance} />
	</div>

		<Button label='Cancel' on:click={hideModal} />
	</div>

</Modal>

<style>
	.balance-info {
		font-size: 0.85rem;
		margin-bottom: 0.5rem;
	}
	.balance-info a {
		color: var(--primary);
	}
</style>
<script>
	import { onMount } from 'svelte';
	import { withdraw } from '../../lib/pool';
	import { poolBalance } from '../../lib/pool';
	import { toasts } from '../../lib/toasts';
	import Modal from './Modal.svelte';
	import Button from '../Button.svelte';
		}
	}

	function setMaxAmount() {
		amount = $poolBalance;
	}

</script>

<style>

	<div class='group'>
		<label>Amount</label>
		<div class='balance-info'>
			<span>Available: </span>
			<a href='#' on:click|preventDefault={setMaxAmount}>
				{parseFloat($poolBalance).toFixed(4)}
			</a>
		</div>
		<input type='number' bind:value={amount} min=0 max={$poolBalance} />
	</div>

		<Button label='Cancel' on:click={hideModal} />
	</div>

</Modal>

<style>
	.balance-info {
		font-size: 0.85rem;
		margin-bottom: 0.5rem;
	}
	.balance-info a {
		color: var(--primary);
	}
</style>