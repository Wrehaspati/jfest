<?php

namespace App\Models;

use App\Enums\EventTypeEnum;
use App\Traits\Slug;
use Illuminate\Database\Eloquent\Model;

class Competition extends Model
{
    use Slug;

    protected $casts = [
        'price' => 'integer',
        'with_ticket' => 'boolean',
        'use_instagram_field' => 'boolean',
        'use_nickname_field' => 'boolean',
        'use_multi_participant' => 'boolean',
        'min_participants' => 'integer',
        'max_participants' => 'integer',
        'registration_quota' => 'integer',
        'use_institution_field' => 'boolean',
        'use_name_field' => 'boolean',
        'use_tool_field' => 'boolean',
        'use_description_field' => 'boolean',
        'registration_opened_at' => 'datetime:Y-m-d',
        'registration_closed_at' => 'datetime:Y-m-d'
    ];

    protected $fillable = [
        'name',
        'description',
        'price',
        'price_tag',
        'group_url',
        'guide_book_url',
        'image_url',
        'with_ticket',
        'use_instagram_field',
        'use_nickname_field',
        'use_multi_participant',
        'min_participants',
        'max_participants',
        'registration_opened_at',
        'registration_closed_at',
        'registration_quota',
        'use_institution_field',
        'use_name_field',
        'use_tool_field',
        'use_description_field',
    ];

    protected $guarded = ['id'];

    protected static function booted()
    {
        static::retrieved(function (Model $model) {
            $model->setAttribute('type', EventTypeEnum::Competition->value);
            $model->setAttribute('is_closed', now()->greaterThanOrEqualTo($model->getAttribute('registration_closed_at')));
            $model->setAttribute('is_opened', now()->lessThan($model->getAttribute('registration_opened_at')));
            $model->setAttribute('is_alt_link', $model->getAttribute('alt_registration_link'));

            $quota = $model->getAttribute('registration_quota');
            $countRegistered = $model->registrations()->count();

            $model->setAttribute('is_quota_full', is_null($quota) ? false : ($quota <= $countRegistered));
        });
    }

    public function registrations()
    {
        return $this->hasMany(Registration::class);
    }
}
