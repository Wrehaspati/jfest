<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Activity;
use App\Models\ActivitySale;
use App\Models\Competition;
use Illuminate\Support\Carbon;

class Jfest8Seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sales = collect([
            new ActivitySale([
                'unique_id' => 'PS1',
                'name' => 'Pre-Sale 1',
                'price' => 35000,
                'tickets_qty_available' => 100
            ]),
            new ActivitySale([
                'unique_id' => 'PS2',
                'name' => 'Pre-Sale 2',
                'price' => 40000,
                'tickets_qty_available' => 200
            ]),
            new ActivitySale([
                'unique_id' => 'OTS',
                'name' => 'On The Spot',
                'price' => 40000,
                'tickets_qty_available' => 500
            ])
        ])->map(function ($activitySale) {
            $activitySale->save();
            return $activitySale;
        });

        collect([
            new Activity([
                'activity_sale_id' => $sales[0]->id,
                'name' => 'Japanese Festival 8',
                'description' => 'Jfest is a japanese culture special event held by JCOS (Japanese Community of STIKOM Bali)',
                'image_url' => null,
                'date' => Carbon::create(2024, 10, 8),
                'purchase_opened_at' => Carbon::create(2024, 8, 1),
                'purchase_closed_at' => Carbon::create(2024, 10, 8)
            ])
        ])->each(function ($activity) {
            $activity->save();
        });

        collect([
            new Competition([
                'name' => 'Cosplay Competition',
                'description' => '',
                'price' => 80000,
                'price_tag' => 'pre-sale',
                'group_url' => null,
                'guide_book_url' => 'https://docs.google.com/spreadsheets/d/1YrCTFy5loILnXk93lTC4PWW8C8OpEajO11jczpKiKZs/edit?gid=1869707873#gid=1869707873',
                'image_url' => null,
                'with_ticket' => true,
                'use_instagram_field' => true,
                'use_nickname_field' => true,
                'use_multi_participant' => true,
                'min_participants' => 1,
                'max_participants' => 3,
                'registration_opened_at' => Carbon::create(2024, 8, 1),
                'registration_closed_at' => Carbon::create(2024, 9, 17),
            ]),
            new Competition([
                'name' => 'Japan Song Cover',
                'description' => '',
                'price' => 50000,
                'price_tag' => 'pre-sale',
                'group_url' => null,
                'guide_book_url' => 'https://docs.google.com/spreadsheets/d/1YrCTFy5loILnXk93lTC4PWW8C8OpEajO11jczpKiKZs/edit?gid=719376848#gid=719376848',
                'image_url' => 'https://bucket.jfestbali.id/images/competitions/japan-song-cover.png',
                'with_ticket' => true,
                'use_instagram_field' => true,
                'use_nickname_field' => true,
                'use_multi_participant' => false,
                'min_participants' => 1,
                'max_participants' => 1,
                'registration_opened_at' => Carbon::create(2024, 8, 1),
                'registration_closed_at' => Carbon::create(2024, 9, 17),
            ]),
            new Competition([
                'name' => 'Japan Mading (SMA/K Sederajat)',
                'description' => '',
                'price' => 80000,
                'price_tag' => 'pre-sale',
                'group_url' => null,
                'guide_book_url' => 'https://docs.google.com/spreadsheets/d/1YrCTFy5loILnXk93lTC4PWW8C8OpEajO11jczpKiKZs/edit?gid=2139455254#gid=2139455254',
                'image_url' => null,
                'with_ticket' => false,
                'use_instagram_field' => false,
                'use_nickname_field' => false,
                'use_multi_participant' => true,
                'min_participants' => 1,
                'max_participants' => 3,
                'registration_opened_at' => Carbon::create(2024, 8, 1),
                'registration_closed_at' => Carbon::create(2024, 9, 17),
            ]),
            new Competition([
                'name' => 'Seiyuu Speech Contest',
                'description' => '',
                'price' => 35000,
                'price_tag' => 'pre-sale',
                'group_url' => null,
                'guide_book_url' => 'https://docs.google.com/spreadsheets/d/1YrCTFy5loILnXk93lTC4PWW8C8OpEajO11jczpKiKZs/edit?gid=1161131752#gid=1161131752',
                'image_url' => null,
                'with_ticket' => false,
                'use_instagram_field' => true,
                'use_nickname_field' => false,
                'use_multi_participant' => false,
                'min_participants' => 1,
                'max_participants' => 1,
                'registration_opened_at' => Carbon::create(2024, 8, 1),
                'registration_closed_at' => Carbon::create(2024, 9, 17),
            ]),
            new Competition([
                'name' => 'Kana Taikai (Tanya-Jawab)',
                'description' => '',
                'price' => 50000,
                'price_tag' => 'pre-sale',
                'group_url' => null,
                'guide_book_url' => 'https://docs.google.com/spreadsheets/d/1YrCTFy5loILnXk93lTC4PWW8C8OpEajO11jczpKiKZs/edit?gid=285385781#gid=285385781',
                'image_url' => null,
                'with_ticket' => true,
                'use_instagram_field' => true,
                'use_nickname_field' => false,
                'use_multi_participant' => false,
                'min_participants' => 1,
                'max_participants' => 1,
                'registration_opened_at' => Carbon::create(2024, 8, 1),
                'registration_closed_at' => Carbon::create(2024, 9, 17),
            ]),
            new Competition([
                'name' => 'Tekken Tournament',
                'description' => '',
                'price' => 0,
                'price_tag' => 'pre-sale',
                'group_url' => null,
                'guide_book_url' => '',
                'image_url' => null,
                'with_ticket' => false,
                'use_instagram_field' => false,
                'use_nickname_field' => false,
                'use_multi_participant' => false,
                'min_participants' => 1,
                'max_participants' => 1,
                'registration_opened_at' => Carbon::create(2024, 8, 1),
                'registration_closed_at' => Carbon::create(2024, 9, 17),
            ]),
            new Competition([
                'name' => 'Original Character',
                'description' => '',
                'price' => 50000,
                'price_tag' => 'pre-sale',
                'group_url' => null,
                'guide_book_url' => 'https://docs.google.com/spreadsheets/d/1YrCTFy5loILnXk93lTC4PWW8C8OpEajO11jczpKiKZs/edit?gid=1153631225#gid=1153631225',
                'image_url' => null,
                'with_ticket' => true,
                'use_instagram_field' => true,
                'use_nickname_field' => true,
                'use_multi_participant' => false,
                'min_participants' => 1,
                'max_participants' => 1,
                'registration_opened_at' => Carbon::create(2024, 8, 1),
                'registration_closed_at' => Carbon::create(2024, 9, 17),
            ]),
            new Competition([
                'name' => 'Jfestography',
                'description' => '',
                'price' => 50000,
                'price_tag' => 'pre-sale',
                'group_url' => null,
                'guide_book_url' => 'https://docs.google.com/spreadsheets/d/1YrCTFy5loILnXk93lTC4PWW8C8OpEajO11jczpKiKZs/edit?gid=1508838615#gid=1508838615',
                'image_url' => null,
                'with_ticket' => true,
                'use_instagram_field' => true,
                'use_nickname_field' => true,
                'use_multi_participant' => false,
                'min_participants' => 1,
                'max_participants' => 1,
                'registration_opened_at' => Carbon::create(2024, 8, 1),
                'registration_closed_at' => Carbon::create(2024, 9, 17),
            ]),
            new Competition([
                'name' => 'Cosplay Walk',
                'description' => '',
                'price' => 20000,
                'price_tag' => 'pre-sale',
                'group_url' => null,
                'guide_book_url' => 'https://docs.google.com/spreadsheets/d/1YrCTFy5loILnXk93lTC4PWW8C8OpEajO11jczpKiKZs/edit?gid=587250063#gid=587250063',
                'image_url' => null,
                'with_ticket' => false,
                'use_instagram_field' => false,
                'use_nickname_field' => false,
                'use_multi_participant' => false,
                'min_participants' => 1,
                'max_participants' => 1,
                'registration_opened_at' => Carbon::create(2024, 8, 1),
                'registration_closed_at' => Carbon::create(2024, 9, 17),
            ]),
        ])->each(function ($competition) {
            $competition->save();
        });
    }
}
