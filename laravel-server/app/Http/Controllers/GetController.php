<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;

class GetController extends Controller
{
    public function getSurveys($id=null){
        if($id != null){
            $surveys = Survey::find($id);
        }else{
            $surveys = Survey::all();
        }
        
        return response()->json([
            "status" => "Success",
            "surveys" => $surveys
        ], 200);
        }
}
