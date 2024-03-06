<?php
// Step 6
$data = 'client_id=' . 'dbcd04607ec374d71003' . '&' .
		'client_secret=' . '10d91bdc6fc31ebccc2cf4a9a8f64365e78e24eb' . '&' .
		'code=' . urlencode($_GET['code']);

$ch = curl_init('https://github.com/login/oauth/access_token');
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);

preg_match('/access_token=([0-9a-f]+)/', $response, $out);
echo $out[1];
curl_close($ch);
?>