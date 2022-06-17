<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AddController;
use App\Http\Controllers\GetController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("/register", [AuthController::class, "register"]);
Route::post("/add_response", [AddController::class, "addResponse"]);
Route::get("/surveys", [GetController::class], "getSurveys");


Route::post("/add_question", [AddController::class, "addQuestion"]);
Route::post("/login", [AuthController::class,"login"]);
Route::post("/add_survey", [AddController::class, "addSurvey"]);





