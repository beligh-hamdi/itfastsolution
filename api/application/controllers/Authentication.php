<?php

require APPPATH . '/libraries/REST_Controller.php';

defined('BASEPATH') OR exit('No direct script access allowed');


class Authentication extends REST_Controller
{
    function __construct()
    {
        // Construct the parent class
        parent::__construct();
        // Configure limits on our controller methods
        // Ensure you have created the 'limits' table and enabled 'limits' within application/config/rest.php
        $this->methods['user_get']['limit'] = 500; // 500 requests per hour per user/key
        $this->methods['user_post']['limit'] = 100; // 100 requests per hour per user/key
        $this->methods['user_delete']['limit'] = 50; // 50 requests per hour per user/key
    }
    
    public function index_get()
    {
        $id = $this->get('id');

        if ($id === NULL)
        {
            $users = $this->db->get('users')->result();
            if ($users)
            {
                $this->response($users, REST_Controller::HTTP_OK);
            }
            else
            {
                $this->response('', REST_Controller::HTTP_NOT_FOUND);
            }
        }
        else
        {
            $this->db->where('id', (int) $id);
            $user = $this->db->get('users')->row();
            $this->response($user, REST_Controller::HTTP_OK);

        }
    }

    public function index_post()
    {

        $name = $this->post('name');
        $email = $this->post('email');
        $password = $this->post('password');
        $img = $this->post('img');

        $user = array(
            'name' => $name,
            'email' => $email,
            'password' => $password,
            'img' => $img
        );

        $this->db->insert('users', $user);
        $id = $this->db->insert_id();
        $this->response($id, REST_Controller::HTTP_OK);

    }

  
  
}