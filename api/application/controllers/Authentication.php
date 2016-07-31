<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Authentication extends CI_Controller
{
    private $responseStatusHeader;
    private $responseBody;
    private $responseBodyContent_type = 'application/json';
    
    function __construct()
    {
        parent::__construct();

        $this->load->model('user','',true);
    }
    
    public function login()
    {
        $requestBody = json_decode(file_get_contents('php://input'), true);

        $username = $requestBody['username'];
        $password = $requestBody['password'];


        if($this->user->login($username, $password)){
            $session_data = $this->session->userdata('logged_in');
            $this->responseStatusHeader = 200;
            $this->responseBody = $session_data;
        }else{
            $this->responseStatusHeader = 500;
            $this->responseBody = 'error login';
        }

        return $this->output
            ->set_content_type($this->responseBodyContent_type)
            ->set_status_header($this->responseStatusHeader)
            ->set_output(json_encode($this->responseBody));
    }

    public function logout()
    {
        $this->session->unset_userdata('logged_in');
        session_destroy();

        $this->responseStatusHeader = 200;
        $this->responseBody = '';

        return $this->output
            ->set_content_type($this->responseBodyContent_type)
            ->set_status_header($this->responseStatusHeader)
            ->set_output(json_encode($this->responseBody));
    }
    
}