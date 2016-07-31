<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Users extends CI_Controller
{
    function __construct()
    {
        parent::__construct();
    }

    private $responseStatusHeader;
    private $responseBody;
    private $responseBodyContent_type = 'application/json';
    
    public function getAll()
    {

        $users = $this->db->get('users')->result();
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

    public function get($id)
    {
        $this->db->where('id', (int) $id);
        $user = $this->db->get('users')->row();

        $this->responseStatusHeader = 200;
        $this->responseBody = $user;
        
        return $this->output
            ->set_content_type($this->responseBodyContent_type)
            ->set_status_header($this->responseStatusHeader)
            ->set_output(json_encode($this->responseBody));
    }
    
    public function post()
    {
        $requestBody = json_decode(file_get_contents('php://input'), true);

        $name = $requestBody['name'];
        $email = $requestBody['email'];
        $password = $requestBody['password'];
        $img = $requestBody['img'];

        $user = array(
            'name' => $name,
            'email' => $email,
            'password' => $password,
            'img' => $img
        );

        $this->db->insert('users', $user);
        $id = $this->db->insert_id();

        $this->responseStatusHeader = 200;
        $this->responseBody = $id;

        return $this->output
            ->set_content_type($this->responseBodyContent_type)
            ->set_status_header($this->responseStatusHeader)
            ->set_output(json_encode($this->responseBody));

    }

    public function delete($id)
    {
        $this->db->where('id', $id);
        $this->db->delete('users');
        
        $this->responseStatusHeader = 200;
        $this->responseBody = $id;

        return $this->output
            ->set_content_type($this->responseBodyContent_type)
            ->set_status_header($this->responseStatusHeader)
            ->set_output(json_encode($this->responseBody));
    }

    public function put()
    {
        $requestBody = json_decode(file_get_contents('php://input'), true);

        $id = $requestBody['id'];
        $name = $requestBody['name'];
        $email = $requestBody['email'];
        $password = $requestBody['password'];
        $img = $requestBody['img'];

        $user = array(
            'name' => $name,
            'email' => $email,
            'password' => $password,
            'img' => $img
        );

        $this->db->where('id', $id);
        $this->db->update('users', $user);

        $this->responseStatusHeader = 200;
        $this->responseBody = $user;

        return $this->output
            ->set_content_type($this->responseBodyContent_type)
            ->set_status_header($this->responseStatusHeader)
            ->set_output(json_encode($this->responseBody));
    }
  
}