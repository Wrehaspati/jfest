<?php

namespace App\Services\Contract;

use App\Models\User;
use Illuminate\Http\RedirectResponse;

interface PaymentProvider
{
    // fee persentase
    // final public const FEE = 0.07;
    // fee fixed
    final public const FEE = 2500;

    public function handleRedirect(User $user, callable $beforeCallback): RedirectResponse;

    public function handleNotification(callable $afterCallback): array;
}
