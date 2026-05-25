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

<Modal title='Deposit' show={showModal} on:close={closeModal}>

	<div class='balance-row'>
		<span class='label'>Wallet Balance</span>
		<span class='balance-value' on:click={setMaxAmount}>{$balance ? $balance.toFixed(6) : '0.000000'}</span>
	</div>

	<Input label='Amount' type='number' bind:value={amount} />

	<Button on:click={submit} isLoading={isSubmitting}>Deposit</Button>
</Modal>

<style>
	.balance-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
		font-size: 0.875rem;
	}
	.label {
		color: var(--text-secondary);
	}
	.balance-value {
		color: var(--text-primary);
		cursor: pointer;
		font-weight: 500;
		text-decoration: underline;
	}
	.balance-value:hover {
		color: var(--primary);
	}
</style>
<script>
	import { onMount } from 'svelte';
	import { withdraw } from '../../lib/pool';
	import { poolShare } from '../../lib/pool';
	import { toasts } from '../../lib/toasts';
	import Modal from './Modal.svelte';
	import Button from '../Button.svelte';
		}
	}

	function setMaxAmount() {
		amount = $poolShare;
	}

</script>

<style>

<Modal title='Withdraw' show={showModal} on:close={closeModal}>

	<div class='balance-row'>
		<span class='label'>Available to Withdraw</span>
		<span class='balance-value' on:click={setMaxAmount}>{$poolShare ? $poolShare.toFixed(6) : '0.000000'}</span>
	</div>

	<Input label='Amount' type='number' bind:value={amount} />

	<Button on:click={submit} isLoading={isSubmitting}>Withdraw</Button>
</Modal>

<style>
	.balance-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
		font-size: 0.875rem;
	}
	.label {
		color: var(--text-secondary);
	}
	.balance-value {
		color: var(--text-primary);
		cursor: pointer;
		font-weight: 500;
		text-decoration: underline;
	}
	.balance-value:hover {
		color: var(--primary);
	}
</style>