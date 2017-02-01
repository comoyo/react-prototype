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
        $sql  = "SELECT n.nid,
                        n.title,
                        td.name as taxonomy_name,
                        ufn.field_user_full_name_value,
                        c.totalcount AS total_read_count,
                        n.created AS created_on,
                        from_unixtime(n.created, '%D %M %Y') AS formatted_created_on,
                        f.filename, 
                        f.uri,
                        pf.filename AS profile_image,
                        pf.uri AS profile_image_uri
                        FROM node AS n JOIN 
                               node_counter AS c ON(c.nid = n.nid) JOIN
                               users AS u ON(n.uid = u.uid) JOIN
                               field_data_field_user_full_name AS ufn ON(u.uid = ufn.entity_id) JOIN
                               field_data_field_category AS fc ON(fc.entity_id = n.nid) JOIN
                               taxonomy_term_data AS td ON(fc.field_category_tid = td.tid) JOIN
                               field_data_field_thumbnil AS t ON(n.nid = t.entity_id ) JOIN 
                               file_managed AS f ON (t.field_thumbnil_fid = f.fid) JOIN
                               file_managed AS pf ON(u.picture = pf.fid)
                               WHERE n.type='article' AND n.status = 1 ORDER BY nid DESC LIMIT {$this->start}, {$this->limit}";
        $data = DB::select(DB::raw($sql));

        return Response::json($data, 200, array(), JSON_PRETTY_PRINT);
    }

    public function getSliders(Request $request)
    {
        $carouselType = $request->input('type') ? $request->input('type') : 'home';
        $sql  = "SELECT n.nid,
                        n.title,
                        b.body_value,
                        n.created AS created_on,  
                        from_unixtime(n.created, '%D %M %Y %h:%i:%s') AS formatted_created_on,
                        f.filename, 
                        f.uri
                        FROM node AS n JOIN 
                               node_counter AS c ON(c.nid = n.nid) JOIN
                               field_data_field_carousel_category AS cc ON(cc.entity_id = n.nid)  JOIN 
                               field_data_body AS b ON(n.nid = b.entity_id) JOIN
                               field_data_field_image AS i ON(n.nid = i.entity_id) JOIN 
                               file_managed AS f ON (i.field_image_fid = f.fid)
                               WHERE n.type='carousel'  AND cc.field_carousel_category_value = '{$carouselType}' AND n.status = 1 ORDER BY nid DESC";
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
                        td.name as taxonomy_name,
                        ufn.field_user_full_name_value,
                        c.totalcount AS total_read_count,
                        n.created AS created_on,
                        from_unixtime(n.created, '%D %M %Y') AS formatted_created_on,
                        f.filename, 
                        f.uri,
                        pf.filename AS profile_image,
                        pf.uri AS profile_image_uri
                        FROM node AS n JOIN 
                               node_counter AS c ON(c.nid = n.nid) JOIN
                               users AS u ON(n.uid = u.uid) JOIN 
                               field_data_field_user_full_name AS ufn ON(u.uid = ufn.entity_id) JOIN
                               field_data_field_category AS fc ON(fc.entity_id = n.nid) JOIN
                               taxonomy_term_data AS td ON(fc.field_category_tid = td.tid) JOIN
                               field_data_field_thumbnil AS t ON(n.nid = t.entity_id ) JOIN 
                               file_managed AS f ON (t.field_thumbnil_fid = f.fid) JOIN
                               file_managed AS pf ON(u.picture = pf.fid)
                               WHERE n.type='article' AND n.status = 1 ORDER BY total_read_count DESC LIMIT {$this->start}, {$this->limit}";

        $data = DB::select(DB::raw($sql));
        return Response::json($data, 200, array(), JSON_PRETTY_PRINT);
    }

    public function getTonicDoctors(Request $request)
    {
    }

    public function getTonicBenifit()
    {
        $sql  = "SELECT bid, body FROM block_custom WHERE bid IN(5, 6, 8, 12) ORDER BY bid ASC";

        $data = DB::select(DB::raw($sql));
        return Response::json($data, 200, array(), JSON_PRETTY_PRINT);
    }

    public function getTonicDiscount()
    {
        /*
        $sql  = "SELECT bid, body FROM block_custom WHERE bid IN(5, 6, 8, 12) ORDER BY bid ASC";

        $data = DB::select(DB::raw($sql));
        return Response::json($data, 200, array(), JSON_PRETTY_PRINT);
        */
    }
    public function getTonicCash()
    {
        $sql  = "SELECT bid, body FROM block_custom WHERE bid IN(13, 14, 15, 17) ORDER BY bid ASC";

        $data = DB::select(DB::raw($sql));
        return Response::json($data, 200, array(), JSON_PRETTY_PRINT);
    }

    function getTonicJibon()
    {
        $sql  = "SELECT bid, body FROM block_custom WHERE bid IN(9, 10, 12) ORDER BY bid ASC";

        $data = DB::select(DB::raw($sql));
        return Response::json($data, 200, array(), JSON_PRETTY_PRINT);
    }
    function getTonicRelatedArticles()
    {

    }

}
