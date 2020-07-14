<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Ranking;
use Auth;

class RankingController extends Controller
{
    protected $ranking;
  /**
   *
   *
   * @return void
   */
  public function __construct(Ranking $ranking)
  {
    $this->ranking = $ranking;
  }

  public function insertRanking(Request $request)
  {
    if (Auth::check()) {
      // ユーザーがログイン中であればスコアをInsert
      $correctRatio = $request->input('correctRatio');
      $this->ranking->insertScore((int) $correctRatio, Auth::user()->id);
    }
    return redirect('/');
  }
}
