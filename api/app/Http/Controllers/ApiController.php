<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Mail;
use Log;
use DateTime;
use App\Http\Libraries\Common;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class ApiController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
     public function __construct(Request $request)
     {
         $this->request = $request;
         if ($this->request->return_type)
             $this->returnType = $request->return_type;
     }

     public function index()
     {
         $videodata = DB::table('node')->select()->orderBy('nid', 'desc')->limit(5)
             ->get();

         $sql  = "SELECT *FROM node AS n JOIN 
                               field_data_body AS b ON(b.entity_id = n.nid) JOIN 
                               field_data_field_thumbnil AS t ON(n.nid = t.entity_id ) JOIN 
                               file_managed AS f ON (t.field_thumbnil_fid = f.fid) WHERE n.type='article' ORDER BY nid DESC LIMIT 0, 3";
         $groupuserlist = DB::select(DB::raw($sql));
         die(json_encode($groupuserlist));
     }
}
