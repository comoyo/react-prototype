<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Response;

class ApiController extends Controller
{

    /**
    * Create a new controller instance.
    *
    * @return void
    */
    private $defaultRecordCount = 3;
    private $limit;
    private  $start;
    public function __construct(Request $request)
    {
        $this->limit = $request->input('limit') ? $request->input('limit') : $this->defaultRecordCount;
        $this->start = $request->input('start') ? $request->input('start') : 0;
    }

    public function getLatestArticles(Request $request)
    {
        //taxonomy_index as ti ON(ti.nid = n.nid) JOIN
        //                       taxonomy_term_data AS td ON(ti.tid = td.tid) JOIN
        $sql  = "SELECT n.nid,
                        n.title,
                        c.totalcount AS total_read_count,
                        n.created AS created_on,
                        from_unixtime(n.created, '%D %M %Y') AS formatted_created_on,
                        f.filename 
                        FROM node AS n JOIN 
                               node_counter AS c ON(c.nid = n.nid) JOIN
                               field_data_field_thumbnil AS t ON(n.nid = t.entity_id ) JOIN 
                               file_managed AS f ON (t.field_thumbnil_fid = f.fid) 
                               WHERE n.type='article' AND n.status = 1 ORDER BY nid DESC LIMIT {$this->start}, {$this->limit}";
        $data = DB::select(DB::raw($sql));

        return Response::json($data, 200, array(), JSON_PRETTY_PRINT);
    }

    public function getSliders(Request $request)
    {
        $sql  = "SELECT n.nid,
                        n.title,
                        n.created AS created_on,
                        from_unixtime(n.created, '%D %M %Y %h:%i:%s') AS formatted_created_on,
                        f.filename 
                        FROM node AS n JOIN 
                               node_counter AS c ON(c.nid = n.nid) JOIN
                               field_data_body AS b ON(b.entity_id = n.nid) JOIN 
                               field_data_field_thumbnil AS t ON(n.nid = t.entity_id ) JOIN 
                               file_managed AS f ON (t.field_thumbnil_fid = f.fid) 
                               WHERE n.type='carousel' AND n.status = 1 ORDER BY nid DESC";
        $data = DB::select(DB::raw($sql));

        return Response::json($data, 200, array(), JSON_PRETTY_PRINT);
    }

    public function getPopularArticles(Request $request)
    {
/*
        $sql  = "SELECT n.nid,
                        n.title,
                        c.totalcount AS total_read_count,
                        n.created AS created_on,
                        from_unixtime(n.created, '%D %M %Y %h:%i:%s') AS formatted_created_on,
                        f.filename,
                        v.total_vote_count 
                        FROM node AS n JOIN 
                               node_counter AS c ON(c.nid = n.nid) JOIN
                               field_data_body AS b ON(b.entity_id = n.nid) JOIN
                               (
                                   SELECT sum(value) as total_vote_count, 
                                          entity_id FROM votingapi_vote 
                                          GROUP by entity_id 
                                          ORDER BY total_vote_count DESC 
                                          LIMIT {$start}, 20   
                               ) AS v ON(v.entity_id = n.nid) JOIN
                               field_data_field_thumbnil AS t ON(n.nid = t.entity_id ) JOIN 
                               file_managed AS f ON (t.field_thumbnil_fid = f.fid) 
                               WHERE n.type='article' ORDER BY total_vote_count DESC LIMIT {$start}, {$limit}";
*/
        $sql  = "SELECT n.nid,
                        n.title,
                        c.totalcount AS total_read_count,
                        n.created AS created_on,
                        from_unixtime(n.created, '%D %M %Y %h:%i:%s') AS formatted_created_on,
                        f.filename
                        FROM node AS n JOIN 
                               node_counter AS c ON(c.nid = n.nid) JOIN
                               field_data_field_thumbnil AS t ON(n.nid = t.entity_id ) JOIN 
                               file_managed AS f ON (t.field_thumbnil_fid = f.fid) 
                               WHERE n.type='article' AND n.status = 1 ORDER BY total_read_count DESC LIMIT {$this->start}, {$this->limit}";

        $data = DB::select(DB::raw($sql));
        return Response::json($data, 200, array(), JSON_PRETTY_PRINT);
    }

    public function getTonicDoctors(Request $request)
    {
    }

    public function getRelatedArticles()
    {
    }
}
