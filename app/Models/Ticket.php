<?php

namespace App\Models;

use App\Enums\OrderStatusEnum;
use App\Enums\AttendStatusEnum;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Ticket extends Model
{
    protected $casts = [
        'price' => 'integer',
        'attended_status' => AttendStatusEnum::class,
        'attended_at' => 'datetime:Y-m-d H:i:s'
    ];

    protected $fillable = [
        'activity_id',
        'order_id',
        'user_id',
        'registration_id',
        'price',
        'attended_status',
        'attended_at'
    ];

    protected $guarded = ['id'];

    public function activity(): BelongsTo
    {
        return $this->belongsTo(Activity::class);
    }

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    public function registration(): BelongsTo
    {
        return $this->belongsTo(Registration::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'uuid');
    }

    public function isPresale1(): bool
    {
        if ($this->isFreePass()) {
            return false;
        }

        $typeId = explode('-', $this->code)[1];
        return ActivitySale::find($typeId)->unique_id === 'PS1';
    }

    public function isFreePass(): bool
    {
        return $this->registration()->exists() && $this->price === 0;
    }

    public function scopeWhereNotFreePass($query)
    {
        return $query->where('price', '>', 0)
            ->whereNull('registration_id')
            ->whereHas('order', function ($query) {
                $query->where('status', OrderStatusEnum::Paid);
            });
    }

    public function orderHasPaid(): bool
    {
        return $this->order->status === OrderStatusEnum::Paid;
    }
}
