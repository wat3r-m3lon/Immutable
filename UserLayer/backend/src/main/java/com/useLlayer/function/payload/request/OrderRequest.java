package com.useLlayer.function.payload.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class OrderRequest {


    // TODO need to be modified as LocalDateTime
    //@NotBlank
    @Size(max = 50)
    private String requestTime;

    @NotBlank
    @Size(max = 100)
    private String title;

    @NotBlank
    @Size(max = 100)
    private String provider;

    @NotBlank
    @Size(max = 50)
    private String dateofDelivery; // Assuming date is sent as String in format "DD-MM-YYYY"

    @NotBlank
    @Size(max = 500)
    private String description;

    @NotBlank
    @Size(max = 50)
    private String language;

    @NotBlank
    @Size(max = 500)
    private String learningOutcome;

    @NotBlank
    @Size(max = 500)
    private String learnerEffort;

    @Size(max = 500)
    private String institutionEmail;

    @NotBlank
    @Size(max = 500)
    private String inherentRequirements;

    @NotBlank
    @Size(max = 500)
    private String assessment;

    @NotBlank
    private String Certification;

    @NotBlank
    @Size(max = 500)
    private String Credit;

    @NotBlank
    @Size(max = 500)
    @JsonProperty(value = "DepthofLearning")
    private String DepthofLearning;

    @NotBlank
    @Size(max = 500)
    @JsonProperty(value = "IndustryAlignment")
    private String IndustryAlignment;

    @NotBlank
    @Size(max = 500)
    @JsonProperty(value = "IndustryOccupation")
    private String IndustryOccupation;

    @NotBlank
    @Size(max = 500)
    @JsonProperty(value = "IndustrySupport")
    private String IndustrySupport;

    @NotBlank
    @Size(max = 500)
    @JsonProperty(value = "Jurisdiction")
    private String Jurisdiction;

    @NotBlank
    @Size(max = 500)
    @JsonProperty(value = "MicrocredentialDate")
    private String MicrocredentialDate;

    @NotBlank
    @Size(max = 500)
    @JsonProperty(value = "RecommendedPrior")
    private String RecommendedPrior;

    @NotBlank
    @Size(max = 500)
    @JsonProperty(value = "Stackability")
    private String Stackability;

    public String getQualityAssurance() {
        return this.qualityAssurance;
    }

    public void setQualityAssurance(String qualityAssurance) {
        this.qualityAssurance = qualityAssurance;
    }

    @NotBlank
    @Size(max = 500)
    private String qualityAssurance;

    @NotBlank
    @Size(max = 100)
    private String price;

    //@NotBlank
    private String coverPhoto; // Assuming this is the base64 encoding of the image or URL to the image




    public String getRequestTime() {
        return this.requestTime;
    }

    public void setRequestTime(String requestTime) {
        this.requestTime = requestTime;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getProvider() {
        return this.provider;
    }

    public void setProvider(String provider) {
        this.provider = provider;
    }

    public String getDateofDelivery() {
        return this.dateofDelivery;
    }

    public void setDateofDelivery(String dateOfDelivery) {
        this.dateofDelivery = dateOfDelivery;
    }

    public String getLanguage() {
        return this.language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getLearningOutcome() {
        return this.learningOutcome;
    }

    public void setLearningOutcome(String learningOutcome) {
        this.learningOutcome = learningOutcome;
    }

    public String getLearnerEffort() {
        return this.learnerEffort;
    }

    public void setLearnerEffort(String learnerEffort) {
        this.learnerEffort = learnerEffort;
    }

    public String getInstitutionEmail() {
        return this.institutionEmail;
    }

    public void setInstitutionEmail(String institutionEmail) {
        this.institutionEmail = institutionEmail;
    }

    public String getInherentRequirements() {
        return this.inherentRequirements;
    }

    public void setInherentRequirements(String inherentRequirements) {
        this.inherentRequirements = inherentRequirements;
    }

    public String getAssessment() {
        return this.assessment;
    }

    public void setAssessment(String assessment) {
        this.assessment = assessment;
    }

    public String getCertification() {
        return this.Certification;
    }

    public void setCertification(String Certification) {
        this.Certification = Certification;
    }

    public String getCredit() {
        return this.Credit;
    }

    public void setCredit(String Credit) {
        this.Credit = Credit;
    }


    public String getPrice() {
        return this.price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDepthofLearning() {
        return this.DepthofLearning;
    }

    public void setDepthofLearning(String DepthofLearning) {
        this.DepthofLearning = DepthofLearning;
    }

    public String getIndustryAlignment() {
        return this.IndustryAlignment;
    }

    public void setIndustryAlignment(String IndustryAlignment) {
        this.IndustryAlignment = IndustryAlignment;
    }

    public String getIndustryOccupation() {
        return this.IndustryOccupation;
    }

    public void setIndustryOccupation(String IndustryOccupation) {
        this.IndustryOccupation = IndustryOccupation;
    }

    public String getIndustrySupport() {
        return this.IndustrySupport;
    }

    public void setIndustrySupport(String IndustrySupport) {
        this.IndustrySupport = IndustrySupport;
    }

    public String getJurisdiction() {
        return this.Jurisdiction;
    }

    public void setJurisdiction(String Jurisdiction) {
        this.Jurisdiction = Jurisdiction;
    }

    public String getMicrocredentialDate() {
        return this.MicrocredentialDate;
    }

    public void setMicrocredentialDate(String MicrocredentialDate) {
        this.MicrocredentialDate = MicrocredentialDate;
    }

    public String getRecommendedPrior() {
        return this.RecommendedPrior;
    }

    public void setRecommendedPrior(String RecommendedPrior) {
        this.RecommendedPrior = RecommendedPrior;
    }

    public String getStackability() {
        return this.Stackability;
    }

    public void setStackability(String Stackability) {
        this.Stackability = Stackability;
    }


    public String getCoverPhoto() {
        return coverPhoto;
    }

    public void setCoverPhoto(String coverPhoto) {
        this.coverPhoto = coverPhoto;
    }
}
