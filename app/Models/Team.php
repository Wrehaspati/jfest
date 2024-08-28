<?php

namespace App\Models;

use App\Traits\Slug;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Team extends Model
{
    // use Slug;

    protected $fillable = [
        'registration_id',
        'name',
        'number_of_members',
    ];

    protected $guarded = ['id'];

    public static function boot(): void
    {
        parent::boot();
        static::creating(function (Model $model) {
            if ($model->getAttribute('slug') === null) {
                $model->setAttribute('slug', $model->generateUniqueSlug($model->getAttributeValue('name')));
            }
        });
    }

    private function generateUniqueSlug(string $name): string
    {
        $slug = Str::slug($name);
        $uniqueCode = $this->generateUniqueCode();
        return $slug . '-' . $uniqueCode;
    }

    private function generateUniqueCode(): string
    {
        return Str::random(8);
    }

    public function members(): HasMany
    {
        return $this->hasMany(TeamMember::class);
    }

    public function registration(): BelongsTo
    {
        return $this->belongsTo(Registration::class);
    }
}
