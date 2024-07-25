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
                'description' => 'PESERTA LOMBA COSSCOMP AKAN MELAKUKAN DRAMA SUATU ADEGAN/SCENE DI ANIME, GAME, DLL UNTUK MEMBERIKAN PENAMPILAN TERBAIK MEREKA',
                'price' => 80000,
                'price_tag' => 'pre-sale',
                'group_url' => null,
                'guide_book_url' => 'https://docs.google.com/spreadsheets/d/1YrCTFy5loILnXk93lTC4PWW8C8OpEajO11jczpKiKZs/edit?gid=1869707873#gid=1869707873',
                'image_url' => 'https://bucket.jfestbali.id/images/competitions/coscomp.png',
                'with_ticket' => true,
                'use_name_field' => true,
                'use_instagram_field' => true,
                'use_nickname_field' => true,
                'use_institution_field' => true,
                'use_multi_participant' => true,
                'min_participants' => 1,
                'max_participants' => 3,
                'registration_opened_at' => Carbon::create(2024, 8, 1),
                'registration_closed_at' => Carbon::create(2024, 9, 17),
            ]),
            new Competition([
                'name' => 'Japanese Song Cover',
                'description' => 'PESERTA LOMBA J-SONG AKAN BERNYANYI DENGAN LAGU TERBAIK MEREKA DAN AKAN DIPERLOMBAKAN UNTUK MEMBUKTIKAN BAHWA MEREKA BISA UNTUK MENJADI SEORANG STAR/IDOL',
                'price' => 50000,
                'price_tag' => 'pre-sale',
                'group_url' => null,
                'guide_book_url' => 'https://docs.google.com/spreadsheets/d/1YrCTFy5loILnXk93lTC4PWW8C8OpEajO11jczpKiKZs/edit?gid=719376848#gid=719376848',
                'image_url' => 'https://bucket.jfestbali.id/images/competitions/japanese-song-cover.png',
                'use_name_field' => true,
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
                'name' => 'Japan Mading',
                'description' => 'PESERTA LOMBA JAPAN MADING AKAN BERKOMPETISI DENGAN BEBERAPA PESERTA KELOMPOK MADING LAINNYA UNTUK MENUNJUKAN KREATIVITAS DALAM SENI MEMBUAT MADING YANG BERTEMAKAN NEGERI SAKURA YAITU JEPANG',
                'price' => 80000,
                'price_tag' => 'pre-sale',
                'group_url' => null,
                'guide_book_url' => 'https://docs.google.com/spreadsheets/d/1YrCTFy5loILnXk93lTC4PWW8C8OpEajO11jczpKiKZs/edit?gid=2139455254#gid=2139455254',
                'image_url' => 'https://bucket.jfestbali.id/images/competitions/mading.png',
                'with_ticket' => false,
                'use_name_field' => true,
                'use_instagram_field' => false,
                'use_nickname_field' => false,
                'use_institution_field' => true,
                'use_multi_participant' => true,
                'min_participants' => 1,
                'max_participants' => 3,
                'registration_opened_at' => Carbon::create(2024, 8, 1),
                'registration_closed_at' => Carbon::create(2024, 9, 17),
            ]),
            new Competition([
                'name' => 'Seiyuu Speech Contest',
                'description' => 'PESERTA LOMBA SEIYUU AKAN BERKOMPETISI DENGAN PESERTA YANG LAIN UTUK MELAKUKAN IMPERSONATE/MENIRUKAN SUARA DARI SUATU KARAKTER ANIME,GAME, DLL DENGAN BAHASA JEPANG',
                'price' => 35000,
                'price_tag' => 'pre-sale',
                'group_url' => null,
                'guide_book_url' => 'https://docs.google.com/spreadsheets/d/1YrCTFy5loILnXk93lTC4PWW8C8OpEajO11jczpKiKZs/edit?gid=1161131752#gid=1161131752',
                'image_url' => 'https://bucket.jfestbali.id/images/competitions/seiyuu.png',
                'with_ticket' => false,
                'use_name_field' => true,
                'use_instagram_field' => true,
                'use_nickname_field' => true,
                'use_multi_participant' => false,
                'min_participants' => 1,
                'max_participants' => 1,
                'registration_opened_at' => Carbon::create(2024, 8, 1),
                'registration_closed_at' => Carbon::create(2024, 9, 17),
            ]),
            new Competition([
                'name' => 'Kana Taikai',
                'description' => 'PESERTA LOMBA KANA TAIKAI AKAN BERKOMPETISI SATU SAMA LAIN UNTUK MENJAWAB SOAL HIRAGANA/ KATAKANA/ KANJI YANG AKAN DIBERIKAN LANGSUNG OLEH PANITIA JFEST8',
                'price' => 50000,
                'price_tag' => 'pre-sale',
                'group_url' => null,
                'guide_book_url' => 'https://docs.google.com/spreadsheets/d/1YrCTFy5loILnXk93lTC4PWW8C8OpEajO11jczpKiKZs/edit?gid=285385781#gid=285385781',
                'image_url' => 'https://bucket.jfestbali.id/images/competitions/kanatakai.png',
                'with_ticket' => false,
                'use_tool_field' => true,
                'use_name_field' => true,
                'use_instagram_field' => true,
                'use_nickname_field' => true,
                'use_institution_field' => true,
                'use_multi_participant' => false,
                'min_participants' => 1,
                'max_participants' => 1,
                'registration_opened_at' => Carbon::create(2024, 8, 1),
                'registration_closed_at' => Carbon::create(2024, 9, 17),
            ]),
            new Competition([
                'name' => 'Original Character',
                'description' => 'PESERTA LOMBA ORIGINAL CHARACTER AKAN MEMBUAT DESAIN KARAKTER MEREKA SENDIRI DAN AKAN DIPERLOMBAKAN UNTUK MENENTUKAN SIAPAKAH KARAKTER YANG PALING TERKECE DAN TERKEREN',
                'price' => 50000,
                'price_tag' => 'pre-sale',
                'group_url' => null,
                'guide_book_url' => 'https://docs.google.com/spreadsheets/d/1YrCTFy5loILnXk93lTC4PWW8C8OpEajO11jczpKiKZs/edit?gid=1153631225#gid=1153631225',
                'image_url' => 'https://bucket.jfestbali.id/images/competitions/original-character.png',
                'with_ticket' => true,
                'use_name_field' => true,
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
                'description' => 'PESERTA LOMBA JFESTOGRAPHY AKAN MENGIRIMKAN FOTO TERBAIK MEREKA DENGAN KONSEP MEREKA MASING-MASING',
                'price' => 50000,
                'price_tag' => 'pre-sale',
                'group_url' => null,
                'guide_book_url' => 'https://docs.google.com/spreadsheets/d/1YrCTFy5loILnXk93lTC4PWW8C8OpEajO11jczpKiKZs/edit?gid=1508838615#gid=1508838615',
                'image_url' => 'https://bucket.jfestbali.id/images/competitions/photography.png',
                'with_ticket' => true,
                'use_name_field' => true,
                'use_instagram_field' => true,
                'use_nickname_field' => true,
                'use_multi_participant' => false,
                'min_participants' => 1,
                'max_participants' => 1,
                'registration_quota' => 10,
                'registration_opened_at' => Carbon::create(2024, 8, 1),
                'registration_closed_at' => Carbon::create(2024, 9, 17),
            ]),
            new Competition([
                'name' => 'Cosplay Walk',
                'description' => 'PESERTA LOMBA COSSWALK AKAN MELAKUKAN SHOWOFF TERBAIK MEREKA UNTUK MEMENANGKAN HATI SANG JURI',
                'price' => 20000,
                'price_tag' => 'pre-sale',
                'group_url' => null,
                'guide_book_url' => 'https://docs.google.com/spreadsheets/d/1YrCTFy5loILnXk93lTC4PWW8C8OpEajO11jczpKiKZs/edit?gid=587250063#gid=587250063',
                'image_url' => 'https://bucket.jfestbali.id/images/competitions/coswalk.png',
                'with_ticket' => false,
                'use_name_field' => true,
                'use_instagram_field' => true,
                'use_nickname_field' => true,
                'use_multi_participant' => false,
                'min_participants' => 1,
                'max_participants' => 1,
                'registration_opened_at' => Carbon::create(2024, 8, 1),
                'registration_closed_at' => Carbon::create(2024, 9, 17),
            ]),
            new Competition([
                'name' => 'Pidato Bahasa Jepang',
                'description' => 'PESERTA LOMBA PIDATO AKAN BERKOMPETISI UNTUK MEMBERIKAN PIDATO TERBAIK MEREKA UNTUK MENJADI SEORANG ORATOR TERBAIK DI JFEST8',
                'price' => 35000,
                'price_tag' => 'pre-sale',
                'group_url' => null,
                'guide_book_url' => 'https://docs.google.com/spreadsheets/d/1YrCTFy5loILnXk93lTC4PWW8C8OpEajO11jczpKiKZs/edit?gid=587250063#gid=587250063',
                'image_url' => 'https://bucket.jfestbali.id/images/competitions/pidato.png',
                'with_ticket' => false,
                'use_name_field' => true,
                'use_instagram_field' => true,
                'use_nickname_field' => false,
                'use_institution_field' => true,
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
