package com.useLlayer.function.payload.request;


import javax.validation.constraints.NotBlank;
public class UpdateOrderStatusRequest {
    @NotBlank
    private String status;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
