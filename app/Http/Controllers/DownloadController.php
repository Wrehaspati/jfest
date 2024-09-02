<?php

namespace App\Http\Controllers;

use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;

class DownloadController extends Controller
{
    public function download(User $user)
    {
        if ($user->tickets->isEmpty()) {
            return redirect()->route('global.home');
        }

        // $pdf = Pdf::loadView('pdfs.ticket', ['user' => $user]);

        // $pdf->setPaper('a4', 'portrait');

        // // return $pdf->download('user_tickets.pdf');
        // return $pdf->stream('user_tickets.pdf');

        return view('pdfs.ticket', ['user' => $user]);
    }
}
