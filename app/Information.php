<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Information extends Model
{
    protected $table = 'informations';

  public function getCreatedAtAttribute($date)
  {
    // created_atのフォーマットの設定
    return Carbon::createFromFormat('Y-m-d H:i:s', $date)->format('Y/m/d');
  }
}
