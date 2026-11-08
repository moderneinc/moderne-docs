package io.moderne.docs

import groovy.json.JsonSlurper
import java.io.InputStream
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.util.Base64

private val client = HttpClient.newBuilder().followRedirects(HttpClient.Redirect.NORMAL).build()

internal fun httpGet(url: String, headers: Map<String, String> = emptyMap()): HttpResponse<String> =
    client.send(request(url, headers), HttpResponse.BodyHandlers.ofString())

internal fun httpGetStream(url: String, headers: Map<String, String> = emptyMap()): HttpResponse<InputStream> =
    client.send(request(url, headers), HttpResponse.BodyHandlers.ofInputStream())

private fun request(url: String, headers: Map<String, String>): HttpRequest =
    HttpRequest.newBuilder(URI(url)).apply { headers.forEach(::header) }.build()

internal fun httpGetBody(url: String, headers: Map<String, String> = emptyMap()): String {
    val response = httpGet(url, headers)
    check(response.statusCode() == 200) { "GET $url returned ${response.statusCode()}" }
    return response.body()
}

internal fun httpGetJson(url: String, headers: Map<String, String> = emptyMap()): Any =
    JsonSlurper().parseText(httpGetBody(url, headers))

internal fun basicAuthorization(username: String, password: String) =
    "Basic " + Base64.getEncoder().encodeToString("$username:$password".toByteArray())
