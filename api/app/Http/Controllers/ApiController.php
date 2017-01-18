<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Log;
use DateTime;
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
        //
    }

    public function getLatestArticles(Request $request)
    {
        header('Content-Type: application/json');
        $limit = $request->input('limit') ? $request->input('limit') : 5;
        $start = $request->input('start') ? $request->input('start') : 0;

        $sql  = "SELECT n.nid,
                        n.title,
                        c.totalcount AS total_read_count,
                        n.created AS created_on,
                        from_unixtime(n.created, '%D %M %Y %h:%i:%s') AS formatted_created_on,
                        b.body_value, 
                        t.field_thumbnil_width,  
                        t.field_thumbnil_height,  
                        f.filename 
                        FROM node AS n JOIN 
                               node_counter AS c ON(c.nid = n.nid) JOIN
                               field_data_body AS b ON(b.entity_id = n.nid) JOIN 
                               field_data_field_thumbnil AS t ON(n.nid = t.entity_id ) JOIN 
                               file_managed AS f ON (t.field_thumbnil_fid = f.fid) 
                               WHERE n.type='article' ORDER BY nid DESC LIMIT {$start}, {$limit}";
        $data = DB::select(DB::raw($sql));
        die(json_encode($data));
    }

    public function getSlider(Request $request)
    {
    }

    public function getPopularArticles(Request $request)
    {
        //header('Content-Type: application/json');
        $limit = $request->input('limit') ? $request->input('limit') : 5;
        $start = $request->input('start') ? $request->input('start') : 0;

        $sql = "SELECT sum(value) as total_vote_count, entity_id FROM votingapi_vote WHERE 1 GROUP by entity_id ORDER BY total_vote_count DESC LIMIT {$start}, {$limit}";
        $data = DB::select(DB::raw($sql));
        $popularArticleId = array();
        foreach($data as $item)
        {
            $popularArticleId[] = $item->entity_id;
        }

        $sql  = "SELECT n.nid,
                        n.title,
                        c.totalcount AS total_read_count,
                        n.created AS created_on,
                        from_unixtime(n.created, '%D %M %Y %h:%i:%s') AS formatted_created_on,
                        b.body_value, 
                        t.field_thumbnil_width,  
                        t.field_thumbnil_height,  
                        f.filename,
                        v.total_vote_count, 
                        FROM node AS n JOIN 
                               node_counter AS c ON(c.nid = n.nid) JOIN
                               field_data_body AS b ON(b.entity_id = n.nid) JOIN
                               (SELECT sum(value) as total_vote_count, entity_id FROM votingapi_vote WHERE 1 GROUP by entity_id ORDER BY total_vote_count DESC LIMIT {$start}, {$limit}) AS b ON(b.entity_id = n.nid) JOIN
                               field_data_field_thumbnil AS t ON(n.nid = t.entity_id ) JOIN 
                               file_managed AS f ON (t.field_thumbnil_fid = f.fid) 
                               WHERE n.type='article' ORDER BY total_vote_count DESC LIMIT {$start}, {$limit}";
        echo '<pre>';
        echo $sql;
        echo '</pre>';
        $data = DB::select(DB::raw($sql));
        die(json_encode($data));
    }

    public function getTonicDoctors(Request $request)
    {
    }

    public function getRelatedArticles()
    {
    }
}
