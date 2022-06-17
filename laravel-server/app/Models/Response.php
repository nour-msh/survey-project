<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Response extends Model
{
    use HasFactory;

    public function questions(){
        return $this->belongsTo(Question::class);
    }

    public function users(){
        return $this->belongsTo(User::class);
    }

}