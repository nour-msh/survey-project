<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;
use App\Models\Survey;
use App\Models\Response;


class AddController extends Controller
{
    
    public function addQuestion(Request $request){
        $question = new question;
        $question->text = $request->text;
        $question->save();
        
        return response()->json([
            "status" => "Success"
        ], 200);
    }

    public function addSurvey(Request $request){
        $survey = new survey;
        $survey->title = $request->title;
        $survey->description = $request->description;
        $survey->save();
        
        return response()->json([
            "status" => "Success"
        ], 200);
    }

    public function addResponse(Request $request){
        $responses = new response;
        $responses->answer = $request->answer;
        $responses->save();
        
        return response()->json([
            "status" => "Success"
        ], 200);
    }
}
