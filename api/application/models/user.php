<?php

Class User extends CI_Model
{
    function login($username, $password)
    {
        $this->db->select('id, username, email, role');
        $this->db->from('users');
        $this->db->where('username', $username);
        $this->db->where('password', MD5($password));
        $this->db->limit(1);

        $result =  $this->db->get()->row();
        $this->session->set_userdata('logged_in', $result);
        return !is_null($result);
    }

    function is_admin()
    {
        $session_data = $this->session->userdata('logged_in');
        return $session_data->role == 'admin';
    }

    function is_authenticated()
    {
        $session_data = $this->session->userdata('logged_in');
        return !is_null($session_data);
    }
}
?>
