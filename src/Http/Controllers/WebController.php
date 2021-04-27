<?php


namespace App\Http\Controllers;


use Illuminate\Http\Request;

class WebController extends Controller
{
    public function router(Request $request)
    {
        return view('router', [
            'user' => $request->user(),
        ]);
    }
}
