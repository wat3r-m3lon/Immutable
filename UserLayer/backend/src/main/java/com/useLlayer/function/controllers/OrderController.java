package com.useLlayer.function.controllers;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import com.useLlayer.function.exception.userResourceNotFoundException;
import com.useLlayer.function.models.Order;
import com.useLlayer.function.payload.request.OrderRequest;
import com.useLlayer.function.payload.request.UpdateOrderStatusRequest;
import com.useLlayer.function.payload.response.MessageResponse;
import com.useLlayer.function.payload.response.OrderResponse;
import com.useLlayer.function.repository.OrderRepository;
import com.useLlayer.function.services.OrderService;
import com.useLlayer.function.tools.imageProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.useLlayer.function.repository.UserRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/{userId}")
    public ResponseEntity<?> createRequest(@PathVariable(value = "userId") Long userId,
                                           @Valid @RequestBody OrderRequest orderRequest) {
        return orderService.createOrderForUser(userId, orderRequest);
    }


    //TODO api func do not finished
    @GetMapping("/{userId}")
    public ResponseEntity<List<Order>> getRequestsByUserId(@PathVariable Long userId) {
        return orderService.getOrdersByUserId(userId);
    }

    @GetMapping("/full/{userId}")
    public ResponseEntity<OrderResponse> getFullRequestsByUserId(@PathVariable Long userId) throws IOException {
        OrderResponse response = orderService.getOrdersAndFilesByUserId(userId);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/info/{orderId}")
    public ResponseEntity<Order> getOrderInfo(@PathVariable Long orderId) {
        return orderService.getOrderById(orderId);
    }

    @PostMapping("/update/{orderId}")
    public ResponseEntity<?> updateOrder(@PathVariable Long orderId, @Valid @RequestBody OrderRequest orderRequest) {
        return orderService.updateOrder(orderId, orderRequest);
    }

    //TODO api func do not finished
    @PutMapping("/{id}")
    public ResponseEntity<?> updateOrderStatus(@PathVariable(value = "id") Long orderId,
                                               @Valid @RequestBody UpdateOrderStatusRequest updateOrderStatusRequest) {
        return orderService.updateOrderStatus(orderId, updateOrderStatusRequest);
    }

    //TODO api func do not finished
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRequest(@PathVariable(value = "id") Long requestId) {
        return orderService.deleteOrder(requestId);
    }

    @GetMapping("/institution/{institutionEmail}")
    public ResponseEntity<List<Order>> getRequestsByInstitutionEmail(@PathVariable String institutionEmail) {
        return orderService.getOrdersByInstitutionEmail(institutionEmail);
    }
}
