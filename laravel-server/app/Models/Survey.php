<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Survey extends Model
{
    use HasFactory;

    public function survey_responses(){
        return $this->hasMany(Survey_Response::class);
    }
    public function users(){
        return $this->belongsTo(User::class);
    }
    public function quesions(){
        return $this->hasMany(Question::class);
    }

}