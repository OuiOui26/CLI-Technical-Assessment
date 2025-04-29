<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StorePersonRequest;
use App\Models\Person;
use Inertia\Inertia;

class PersonController extends Controller
{
    
    public function index()
    {
        $people = Person::orderBy('id')->get();
        return Inertia::render('People/Index', [
            'people' => $people,
        ]);
    }

    public function store(StorePersonRequest $request)
    {
        Person::create($request->only('first_name', 'last_name'));

        return redirect()->back()->with('success', 'Person added successfully.');
    }
}
