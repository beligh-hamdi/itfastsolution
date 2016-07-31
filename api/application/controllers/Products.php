<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Products extends CI_Controller
{
    private $responseStatusHeader;
    private $responseBody;
    private $responseBodyContent_type = 'application/json';

    function __construct()
    {
        parent::__construct();

    }
    
    public function getAll()
    {

        $users = $this->db->get('products')->result();
        if ($users)
        {
            $this->responseStatusHeader = 200;
            $this->responseBody = $users;
        }
        else
        {
            $this->responseStatusHeader = 404;
            $this->responseBody = 'Error';
        }


        return $this->output
            ->set_content_type($this->responseBodyContent_type)
            ->set_status_header($this->responseStatusHeader)
            ->set_output(json_encode($this->responseBody));
    }



  
}