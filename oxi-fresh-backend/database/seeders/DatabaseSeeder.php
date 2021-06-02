<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\Subscription;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $data = [
            [
                'name'=>'Exo_Company',
                'compnay_name'=> 'Exo_Company',
                'compnay_email'=> 'exo@mail.com',
                'description'=> 'Newsletter',
            ],
            [
                'name'=>'Next_Fresh',
                'compnay_name'=> 'Next_Fresh',
                'compnay_email'=> 'nextfresh@mail.com',
                'description'=> 'Product Updates',
            ],
            [
                'name'=>'Virtucon',
                'compnay_name'=> 'Virtucon',
                'compnay_email'=> 'virtucon@mail.com',
                'description'=> 'News Letter',
            ],
            [
                'name'=>'Globex',
                'compnay_name'=> 'Globex',
                'compnay_email'=> 'globex@mail.com',
                'description'=> 'Security Updates',
            ],
            [
                'name'=>'Gringotts',
                'compnay_name'=> 'Gringotts',
                'compnay_email'=> 'gringotts@mail.com',
                'description'=> 'Product Updates',
            ],
            [
                'name'=>'Spacely',
                'compnay_name'=> 'Spacely',
                'compnay_email'=> 'spacely@mail.com',
                'description'=> 'Newsletter',
            ],
        ];
        DB::table('subscriptions')->insert($data);
    }
}
